Create a formatted research report for: $ARGUMENTS

## Report Generation Process

1. **Determine Scope**
   - Ask user what to include:
     - Single topic or multiple topics?
     - Time range?
     - Specific aspects only?

2. **Gather Content**
   - Collect findings from specified topics
   - Include relevant cross-references
   - Gather key sources

3. **Format Report**

   Structure:
   ```markdown
   # Research Report: [Title]
   **Date**: [Current date]
   **Author**: [If specified]
   **Period Covered**: [Date range]

   ---

   ## Table of Contents
   [Auto-generated based on sections]

   ---

   ## Introduction
   [Purpose, scope, methodology]

   ## Findings
   ### [Topic 1]
   [Key findings with evidence]

   ### [Topic 2]
   [Key findings with evidence]

   ## Cross-Topic Analysis
   [Connections, patterns, themes]

   ## Conclusions
   [Main takeaways, implications]

   ## Recommendations
   [Next steps, future directions]

   ## References
   [All sources cited, formatted per style guide]

   ---

   ## Appendix
   [Supporting materials, raw data]
   ```

4. **Save Report**
   - Save to root directory as `report-[topic]-[date].md`
   - Optionally create PDF/HTML version

5. **Summary**
   - Report location
   - Page/word count
   - Key highlights
