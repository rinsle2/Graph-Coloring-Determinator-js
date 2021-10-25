# Graph-Coloring-Determinator-js
Incomplete Version, standby for testing and bugcrushing<br/>
<br/>
<br/>
Failure Point:<br/>
Graph Consisting of the Edges below<br/>
<br/>
{1, 2}<br/>
{1, 3}<br/>
{1, 4}<br/>
{3, 5}<br/>
{3, 6}<br/>
{3, 7}<br/>
{6, 8}<br/>
{6, 9}<br/>
{6, 10}<br/>
<br/>
and Color value set to:<br/>
2<br/>
<br/>
Should Return: true<br/>
<br/>
Returns: false<br/>
<br/>
How this happens:<br/>
The algorithm used in tyhe row check fails to account for traversal, however traversal can not be used as any method dealing in traversal turns this program from a potentional P time algorithm into a definite NP time algorithm.<br/>
<br/>
How to fix this:<br/>
TBD<br/>
<br/>
Failed Ideas:<br/>
- Go through one layer of traversal, and use that one layer to determine if the adjacent nodes only have a list size of 1, if so, using a separate field within the class' information (somewhere), decrease the amount of the len that the node uses on the previous node.<br/>
  - Fails with the graph above and similar graphs of that nature, due to the algorithm allowing the complete compression of the graph down to a single node if not handled properly, also it's far too slow.
- Coming soon.
<br/>
Possible Solution:<br/>
- Create a copy of the graph matrix, and check for all rows with a langth of 1, for each row with a length of 1, go to the adjacent node and remove the connection, thus fixing the issue perscribed above if repeated until no nodes are considered "valid"<br/>
Result of Testing Solution:<br/>
- Coming soon.
