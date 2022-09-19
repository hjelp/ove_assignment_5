interface StorageKeyValue {
  'translate-user': number,
}

export const storageSave = <K extends keyof StorageKeyValue>(key : K, value : StorageKeyValue[K]) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = <K extends keyof StorageKeyValue>(key : K): StorageKeyValue[K] | null => {
  const data = localStorage.getItem(key);
  if(data){
    return JSON.parse(data)
  }

  return null;
}

export const storageDelete = (key : keyof StorageKeyValue) => {
  localStorage.removeItem(key);
}
