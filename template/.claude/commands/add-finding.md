Document new research finding: $ARGUMENTS

Follow this workflow to properly document the finding:

1. **Determine Topic**
   - Ask which topic this finding belongs to
   - If it's a new topic, suggest creating a new folder
   - Topic folders should be lowercase with hyphens (e.g., ai-safety)

2. **Read Existing Research**
   - Check if `research/{topic}/findings.md` exists
   - If not, create it with proper header structure
   - Review existing findings to avoid duplication

3. **Add the Finding**
   Format:
   ```
   ## [Brief Descriptive Title]
   **Date**: [Current date]
   **Source**: [Citation or source name]
   **Confidence**: [High/Medium/Low]

   [Detailed description of the finding]

   **Implications**:
   - [What this means]
   - [How it relates to research goals]

   **Related Topics**: [Links to other relevant research areas]
   ```

4. **Update Sources**
   - Add or update entry in `research/{topic}/sources.md`
   - Include full citation details
   - Note access date and URL if applicable

5. **Update INDEX.md**
   - Add/update entry in the Research Topics table
   - Update file counts and last modified date
   - Include one-line summary for quick reference
   - Add cross-references if applicable

6. **Update CLAUDE.md**
   - Update "Current Research State" section
   - Update "Last Updated" timestamp
   - Note if this changes research direction

7. **Confirm Completion**
   - Summarize what was documented
   - Suggest any cross-references to explore
   - Note next steps if applicable
