using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectStart.Commerce.Repository
{
    public abstract class BaseRepository<T> where T: class
    {
        protected CommerceContext CommerceContext { get; }
        public BaseRepository( CommerceContext commerceContext)
        {
            CommerceContext = commerceContext;
        }
        //IEnumerable<T> GetAll
    }
}
