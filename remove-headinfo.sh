#!/bin/bash
find app -name "*.tsx" -type f -exec grep -l "HeadInfo" {} \; | while read file; do
  # Remove the import line
  grep -v "import HeadInfo" "$file" > "$file.tmp" && mv "$file.tmp" "$file"
  # Remove the HeadInfo JSX and empty fragments if needed
  sed -i 's/<HeadInfo \/>//g' "$file"
  sed -i 's/<>//g' "$file"
  sed -i 's/<\/>//g' "$file"
done
