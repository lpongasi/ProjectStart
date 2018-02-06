using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectStart.Entity
{
    public class ProductDTO : BaseDTO
    {
        public string DisplayName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
