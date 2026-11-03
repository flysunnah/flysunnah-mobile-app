import test from 'node:test';
import assert from 'node:assert/strict';

const { appConfig } = await import('../src/config.mjs');

test('app configuration contains production contact and branding', () => {
  assert.equal(appConfig.name, 'Fly Sunnah');
  assert.equal(appConfig.website, 'https://flysunnah.com');
  assert.equal(appConfig.whatsapp, '8801909452332');
  assert.equal(appConfig.colors.primary, '#1a5f7a');
  assert.equal(appConfig.colors.accent, '#57C5B6');
});
