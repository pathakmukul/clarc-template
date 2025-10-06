Link related research topics: $1 and $2

## Cross-Referencing Process

1. **Verify Topics Exist**
   - Check that `research/$1/` exists
   - Check that `research/$2/` exists
   - If either doesn't exist, inform user

2. **Analyze Relationships**
   - Read findings from both topics
   - Identify:
     - Shared concepts
     - Complementary insights
     - Contradictions or tensions
     - Causal relationships
     - Temporal relationships

3. **Document Cross-References**

   In `research/$1/findings.md`, add:
   ```markdown
   **Related to [$2]**: [Description of relationship]
   ```

   In `research/$2/findings.md`, add:
   ```markdown
   **Related to [$1]**: [Description of relationship]
   ```

4. **Update INDEX.md**
   - Add cross-reference in the Cross-References section
   - Format: **[Topic A]** relates to: [Topic B] (relationship description)

5. **Suggest Synthesis**
   - If the connection is strong, suggest:
     - Creating a synthesis document
     - New research directions
     - Questions to explore

6. **Report**
   - Summarize the relationship discovered
   - Note where cross-references were added
   - Provide suggestions for further exploration
