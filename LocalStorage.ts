class LocalStorage {
  private static instance: LocalStorage;
  private constructor() {}
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
  clear(): void {
    localStorage.clear();
  }
  getLenght(): number {
    return localStorage.length;
  }
  getKey(number: number): string | null {
    return localStorage.key(number);
  }
  public static getInstance(): LocalStorage {
    if (!LocalStorage.instance) {
      LocalStorage.instance = new LocalStorage();
      return LocalStorage.instance;
    }
    return LocalStorage.instance;
  }
}
