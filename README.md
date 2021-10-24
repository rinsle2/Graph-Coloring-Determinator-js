# Graph-Coloring-Determinator-js
Incomplete Version, standby for testing and bugcrushing


Failure Point:
Graph Consisting of the Edges below

{1, 2}
{1, 3}
{1, 4}
{3, 5}
{3, 6}
{3, 7}
{6, 8}
{6, 9}
{6, 10}

and Color value set to:
2

Should Return: true

Returns: false

How this happens:
The algorithm used in tyhe row check fails to account for traversal, however traversal can not be used as any method dealing in traversal turns this program from a potentional P time algorithm into a definite NP time algorithm.

How to fix this:
TBD
