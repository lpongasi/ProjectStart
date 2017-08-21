using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectStart.Commerce.Common
{
    public class Audit
    {
        public void SetCreatedBy(string createdBy)
        {
            CreatedBy = createdBy;
            DateCreated = DateTime.Now;
        }
        public void SetModifiedBy(string modifiedBy)
        {
            ModifiedBy = modifiedBy;
            DateModified = DateTime.Now;
        }
        public void SetRemovedBy(string removedBy)
        {
            RemovedBy = removedBy;
            DateRemoved = DateTime.Now;
            IsRemoved = true;
        }
        public string CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime? DateModified { get; set; }
        public bool IsRemoved { get; set; }
        public string RemovedBy { get; set; }
        public DateTime? DateRemoved { get; set; }
    }
}
