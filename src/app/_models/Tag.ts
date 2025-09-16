export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#F29999');
    static readonly TYPESCRIPT = new Tag('TypeScript', '#A8D8FF');
    static readonly PYTHON = new Tag('Python', '#FFE699');
    static readonly CSHARP = new Tag('C#', '#B0B0E6');
    static readonly JAVA = new Tag('Java', '#FFC98A');
    static readonly NODEJS = new Tag('Node.JS', '#B3FFB3');
    static readonly ASPNET = new Tag('ASP.NET', '#D5A6E6');
    static readonly JAVASCRIPT = new Tag('JavaScript', '#FFEE99');
    static readonly REACT = new Tag('React', '#C5E8FF');
    static readonly SQL = new Tag('SQL', '#FFD6A5');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#6699CC');

    private constructor(private readonly key: string, public readonly color: string) { }

    toString() {
        return this.key;
    }
}
