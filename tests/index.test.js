const ProfessionalProject = require('../src/index');

describe('ProfessionalProject', () => {
    let project;
    
    beforeEach(() => {
        project = new ProfessionalProject();
    });
    
    test('should initialize correctly', () => {
        expect(project.config.name).toBeDefined();
        expect(project.config.version).toBeDefined();
    });
    
    test('should have professional features', () => {
        const features = project.run();
        expect(features.automation).toBe(true);
        expect(features.testing).toBe(true);
        expect(features.documentation).toBe(true);
        expect(features.cicd).toBe(true);
    });
});
