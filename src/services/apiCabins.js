import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be load");
  }
  return data;
}

export async function createEditCabin(newCabin, id) {
  //عشان لو الصوره موجوده ابعتها زي ماهي لو مش موجوده ابعت واحده
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  //→ اسم فريد للصورة لتجنب أي تعارض
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  // https://yiahpfazdctqljzmmtzx.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  //الرابط الكامل للصورة داخل Supabase Storage ليتم استخدامه في الموقع أو تخزينه في قاعدة البيانات.
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1-creat/edit cabin
  let query = supabase.from("cabins");

  //CREATE CABIN
  if (!id) {
    //array
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }

  //EDIT CABIN
  if (id) {
    //single value
    query = query.update({ ...newCabin, image: imagePath }).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  //2-upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3-delete cabin if there is error in storage image

  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data[0].id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be created and the cabin was not created"
    );
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
