using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ProjectStart.Entity
{
    public class BaseEntity
    {
        public void SetCreatedBy(string createdBy)
        {
            if (!string.IsNullOrEmpty(createdBy))
            {
                CreatedBy = createdBy;
                DateCreated = DateTime.Now;
            }
        }
        public void SetModifiedBy(string modifiedBy)
        {
            if (!string.IsNullOrEmpty(modifiedBy))
            {
                ModifiedBy = modifiedBy;
                //DateModified = DateTime.Now;
            }
        }
        public void SetRemovedBy(string removedBy)
        {
            if (!string.IsNullOrEmpty(removedBy))
            {
                RemovedBy = removedBy;
                DateRemoved = DateTime.Now;
                IsRemoved = true;
            }
        }
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string CreatedBy { get; set; }
        public DateTime DateCreated { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime DateModified { get; set; }
        public bool IsRemoved { get; set; }
        public string RemovedBy { get; set; }
        public DateTime DateRemoved { get; set; }
    }
}
