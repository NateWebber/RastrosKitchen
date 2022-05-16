class RecipeRepository {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const sql = `CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, recipe TEXT)`;
        return this.dao.run(sql);
    }

    create(recipe) {
        return this.dao.run(`INSERT INTO recipes (recipe) VALUES (?)`, [recipe]);
    }

    delete(id) {
        return this.dao.run(`DELETE FROM recipes WHERE id  = ?`, [id]);
    }

    getAll() {
        return this.dao.all(`SELECT * FROM recipes`);
    }
}

module.exports = RecipeRepository;
