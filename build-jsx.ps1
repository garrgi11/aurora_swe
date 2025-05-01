# 1. Install Babel + presets
npm install --save-dev `
  @babel/core `
  @babel/cli `
  @babel/preset-env `
  @babel/preset-react `
  @babel/preset-typescript

# 2. Create babel.config.json
@"  
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }],
    "@babel/preset-typescript"
  ]
}
"@ | Out-File -Encoding utf8 babel.config.json

# 3. Run Babel to strip TS & emit .jsx
npx babel .\src `
  --extensions ".ts,.tsx" `
  --out-dir .\dist `
  --out-file-extension ".jsx" `
  --source-maps

# 4. Bulk-rename any .js → .jsx (only needed if you skipped --out-file-extension)
Get-ChildItem -Path .\dist -Recurse -Filter *.js |
  Rename-Item -NewName { $_.Name -replace '\.js$','.jsx' }
