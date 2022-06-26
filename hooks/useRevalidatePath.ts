export async function useRevalidatePath(path: string) {
  const revalidate = await fetch('/api/revalidate?path=' + path);

  const { revalidated }: IRevalidated = await revalidate.json();

  return revalidated;
}
