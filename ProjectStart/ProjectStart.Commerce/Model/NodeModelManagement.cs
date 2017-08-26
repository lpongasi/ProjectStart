using System.Collections.Generic;
using System.Linq;

namespace ProjectStart.Commerce.Model
{
    public static class NodeModelManagement
    {
        public static IEnumerable<NodeModel> ToSubNodes(this List<NodeModel> nodes)
        {
            if (nodes == null || !nodes.Any())
                return new List<NodeModel>();

            var parentNodes = nodes.Where(w => !w.ParentId.HasValue).ToList();

            parentNodes.ForEach(node => AddSubNode(node, nodes));

            return parentNodes;
        }
        private static void AddSubNode(NodeModel currentNode, IReadOnlyCollection<NodeModel> nodes)
        {
            nodes.Where(node => node.ParentId == currentNode.Id).ToList()
                .ForEach(node =>
            {
                currentNode.SubNodes.Add(node);
                if (nodes.Any(a => a.ParentId == node.Id))
                    AddSubNode(node, nodes);
            });
        }
    }
}
