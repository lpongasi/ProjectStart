using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.ValueGeneration;
using System;
using System.Collections.Generic;
using System.Text;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjectStart.Commerce.Common;

namespace ProjectStart.Commerce
{
    public static class CommerceModel
    {
        public static void InitializeCommerceModel(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Node>(entity =>
            {
                entity
                .ToTable("Node");

                entity
                .Property(p => p.Id)
                .ValueGeneratedOnAdd();

                entity
                .Property(p => p.Name)
                .IsRequired();

                entity
                .HasMany(m => m.SubNodes)
                .WithOne(o => o.ParentNode)
                .HasForeignKey(f => f.ParentId)
                .HasPrincipalKey(k => k.Id);
            });
        }
    }
}
