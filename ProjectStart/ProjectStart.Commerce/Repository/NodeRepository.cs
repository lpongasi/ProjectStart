using ProjectStart.Commerce.Entity;
using System;
using System.Linq;
using System.Collections.Generic;
using System.Text;
using System.Linq.Expressions;

namespace ProjectStart.Commerce.Repository
{
    public class NodeRepository : BaseRepository<Node>
    {
        public NodeRepository(CommerceContext commerceContext) 
            : base(commerceContext) { }

        public IEnumerable<TResult> GetAll<TResult>(Expression<Func<Node, TResult>> expression = null,int startIndex = 0,int numberOfItems = 0)
        {
            return CommerceContext.Nodes.Select(expression).ToList();
        }
    }
}
