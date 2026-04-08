import { describe, it, expect } from 'vitest';
import {
  profile,
  experience,
  education,
  languages,
  frameworks,
  aiItems,
  dataLayer,
  infrastructure,
  projects,
} from './profile';

describe('profile', () => {
  it('should have required contact info', () => {
    expect(profile.email).toContain('@');
    expect(profile.github).toMatch(/^https:\/\/github\.com\//);
    expect(profile.name).toBeTruthy();
    expect(profile.chineseName).toBeTruthy();
  });

  it('should have at least one badge', () => {
    expect(profile.badges.length).toBeGreaterThan(0);
  });
});

describe('experience', () => {
  it('should have at least one entry', () => {
    expect(experience.length).toBeGreaterThan(0);
  });

  it('should have required fields for each entry', () => {
    for (const exp of experience) {
      expect(exp.company).toBeTruthy();
      expect(exp.role).toBeTruthy();
      expect(exp.period).toBeTruthy();
      expect(exp.achievements.length).toBeGreaterThan(0);
      expect(exp.tags.length).toBeGreaterThan(0);
    }
  });

  it('should have exactly one current position', () => {
    const current = experience.filter((e) => e.current);
    expect(current.length).toBe(1);
  });
});

describe('education', () => {
  it('should have school and degree', () => {
    expect(education.school).toBeTruthy();
    expect(education.degree).toBeTruthy();
    expect(education.period).toMatch(/\d{4}/);
  });
});

describe('languages', () => {
  it('should have unique names', () => {
    const names = languages.map((l) => l.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('should have levels between 0 and 100', () => {
    for (const lang of languages) {
      expect(lang.level).toBeGreaterThanOrEqual(0);
      expect(lang.level).toBeLessThanOrEqual(100);
    }
  });
});

describe('frameworks', () => {
  it('should have at least one group', () => {
    expect(Object.keys(frameworks).length).toBeGreaterThan(0);
  });

  it('should have items in each group', () => {
    for (const group of Object.values(frameworks)) {
      expect(group.items.length).toBeGreaterThan(0);
      expect(group.label).toBeTruthy();
    }
  });
});

describe('aiItems', () => {
  it('should have highlights that exist in text', () => {
    for (const item of aiItems) {
      for (const h of item.highlights) {
        expect(item.text).toContain(h);
      }
    }
  });
});

describe('dataLayer', () => {
  it('should have relational, vector, and cache categories', () => {
    expect(dataLayer.relational.items.length).toBeGreaterThan(0);
    expect(dataLayer.vector.items.length).toBeGreaterThan(0);
    expect(dataLayer.cache.items.length).toBeGreaterThan(0);
  });
});

describe('infrastructure', () => {
  it('should include AWS', () => {
    const aws = infrastructure.find((i) => i.label === 'AWS');
    expect(aws).toBeDefined();
    expect(aws!.chips.length).toBeGreaterThan(0);
  });
});

describe('projects', () => {
  it('should have unique names', () => {
    const names = projects.map((p) => p.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('should have at least one stack item each', () => {
    for (const proj of projects) {
      expect(proj.stack.length).toBeGreaterThan(0);
    }
  });
});
