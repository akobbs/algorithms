# Levenshtein distance

Given two words word1 and word2, find the minimum number of operations required
to convert word1 to word2.

You have the following 3 operations permitted on a word:

1. Insert a character
2. Delete a character
3. Replace a character

### Example 1:

Input: word1 = "horse", word2 = "ros"

Output: 3

Explanation:

- horse -> rorse (replace 'h' with 'r')
- rorse -> rose (remove 'r')
- rose -> ros (remove 'e')

### Example 2:

Input: word1 = "intention", word2 = "execution"

Output: 5

Explanation:

- intention -> inention (remove 't')
- inention -> enention (replace 'i' with 'e')
- enention -> exention (replace 'n' with 'x')
- exention -> exection (replace 'n' with 'c')
- exection -> execution (insert 'u')

### Matrix examples:

`"horse" => "ros"`

|     | ""  | h   | o   | r   | s   | e   |
| --- | --- | --- | --- | --- | --- | --- |
| ""  | 0   | 1   | 2   | 3   | 4   | 5   |
| r   | 1   | 1   | 2   | 2   | 3   | 4   |
| o   | 2   | 2   | 1   | 2   | 3   | 4   |
| s   | 3   | 3   | 2   | 2   | 2   | 3   |

`"intention" => "execution"`

|     | ""  | i   | n   | t   | e   | n   | t   | i   | o   | n   |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ""  | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   |
| e   | 1   | 1   | 2   | 3   | 3   | 4   | 5   | 6   | 7   | 8   |
| x   | 2   | 2   | 2   | 3   | 4   | 4   | 5   | 6   | 7   | 8   |
| e   | 3   | 3   | 3   | 3   | 3   | 4   | 5   | 6   | 7   | 8   |
| c   | 4   | 4   | 4   | 4   | 4   | 4   | 5   | 6   | 7   | 8   |
| u   | 5   | 5   | 5   | 5   | 5   | 5   | 5   | 6   | 7   | 8   |
| t   | 6   | 6   | 6   | 5   | 6   | 6   | 5   | 6   | 7   | 8   |
| i   | 7   | 6   | 7   | 6   | 6   | 7   | 6   | 5   | 6   | 7   |
| o   | 8   | 7   | 7   | 7   | 7   | 7   | 7   | 6   | 5   | 6   |
| n   | 9   | 8   | 7   | 8   | 8   | 7   | 8   | 7   | 6   | 5   |
