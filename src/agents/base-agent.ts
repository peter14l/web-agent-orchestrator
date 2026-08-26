export abstract class BaseWebAgent {
  constructor(
    public readonly name: string,
    public readonly role: string,
    public readonly description: string
  ) {}

  protected log(level: "INFO" | "WARN" | "ERROR", message: string) {
    console.error(`[${this.name}][${level}] ${message}`);
  }
}
