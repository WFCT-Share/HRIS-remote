from py2neo import Node, Relationship, Graph, NodeMatcher, RelationshipMatcher

graph = Graph('http://localhost:7474/', username='neo4j', password='123456')

Person2 = Node('Person', name='于一博')
graph.create(Person2)  # 创建结点
Person3 = Node('Person', name='杨聪浩')
graph.create(Person3)  # 创建结点
relation16 = Relationship(Person2,'室友',Person3)
graph.create(relation16)  # 创建关系


