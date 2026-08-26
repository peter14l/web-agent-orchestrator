export class BaseWebAgent {
    name;
    role;
    description;
    constructor(name, role, description) {
        this.name = name;
        this.role = role;
        this.description = description;
    }
    log(level, message) {
        console.error(`[${this.name}][${level}] ${message}`);
    }
}
//# sourceMappingURL=base-agent.js.map