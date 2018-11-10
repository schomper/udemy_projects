const Generation = require('./generation.js');

class GenerationEngine {
    constructor() {
        this.generation = null;
    }

    start() {
        this.buildNewGeneration();
    }

    stop() {
        clearTimeout(this.timer);
    }

    buildNewGeneration() {
        this.generation = new Generation();

        console.log('new generation', this.generation);

        this.timer = setTimeout(
            () => this.buildNewGeneration(), 
            this.generation.expiration.getTime() - Date.now()
        );
    }
}

module.exports = GenerationEngine;