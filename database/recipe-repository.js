class RecipeRepository {
    constructor(dao) {
        this.dao = dao;
    }

    createTable() {
        const sql = `CREATE TABLE IF NOT EXISTS recipes (id INTEGER PRIMARY KEY AUTOINCREMENT, recipe_json_string TEXT, recipe_title TEXT)`;
        return this.dao.run(sql);
    }

    create(recipe_json_string, recipe_name) {
        return this.dao.run(`INSERT INTO recipes (recipe_json_string, recipe_title) VALUES (?, ?)`, [recipe_json_string, recipe_name]);
    }

    delete(id) {
        return this.dao.run(`DELETE FROM recipes WHERE id  = ?`, [id]);
    }

    getAll() {
        return this.dao.all(`SELECT * FROM recipes`);
    }

    getByID(id){
        return this.dao.get(`SELECT * FROM recipes WHERE id = ?`, [id]);
    }
}

module.exports = RecipeRepository;
