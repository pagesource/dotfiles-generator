#!/usr/bin/env node

if (process.env.npm_config_global) {
  process.exit(0);
} else {
  process.exit(1);
}
