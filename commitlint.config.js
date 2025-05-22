module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      // Types autorisés
      'type-enum': [2, 'always', [
        'feat',
        'fix',
        'chore',
        'docs',
        'refactor',
        'test'
      ]],
      // Le scope doit être en kebab-case si présent
      'scope-case': [2, 'always', 'kebab-case'],
      // Le sujet ne doit pas commencer par une majuscule ni finir par un point
      'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
      'subject-empty': [2, 'never'],
      'subject-full-stop': [2, 'never', '.'],
      // Longueur minimale du sujet
      'subject-min-length': [2, 'always', 10]
    }
  };
  