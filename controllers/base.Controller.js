export class BaseController {
    constructor(model, options = {}) {
        this.model = model;
        this.modelIdName = options.modelIdName || 'id';
        this.defaultIncludes = Array.isArray(options.includes) ? options.includes : undefined;
    }

    async create(req, res) {
        try {
            const item = await this.model.create(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const queryOptions = {};
            
            // Добавляем includes только если это массив и он не пустой
            if (Array.isArray(this.defaultIncludes)) {
                queryOptions.include = this.defaultIncludes;
            }
            
            const items = await this.model.findAll(queryOptions);
            res.json(items);
        } catch (error) {
            res.status(500).json({ 
                message: error.message,
                // Добавляем детали ошибки для отладки
                details: error.errors?.map(err => err.message) 
            });
        }
    }

    async getOne(req, res) {
        try {
            const queryOptions = {
                where: { [this.modelIdName]: req.params.id }
            };
            
            // Та же проверка для getOne
            if (Array.isArray(this.defaultIncludes)) {
                queryOptions.include = this.defaultIncludes;
            }
            
            const item = await this.model.findOne(queryOptions);
            
            if (!item) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json(item);
        } catch (error) {
            res.status(500).json({ 
                message: error.message,
                details: error.errors?.map(err => err.message)
            });
        }
    }

    async updateData(req, res) {
        try {
            const updatedItem = await this.model.update(req.body, {
                where: { [this.modelIdName]: req.params.id },
                returning: true,
            });
            if (updatedItem[0] === 0 || !updatedItem[1][0]) {
                return res.status(404).json({ message: 'Элемент не найден' });
            }
            res.json(updatedItem[1][0]);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const deletedItem = await this.model.destroy({
                where: { [this.modelIdName]: req.params.id },
            });
            if (!deletedItem) {
                return res.status(404).json({ message: 'Item not found' });
            }
            res.json({ message: 'Item deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}