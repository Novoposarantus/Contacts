using System;
using System.Data.Entity;
using Domain.Models;

namespace Domain.Context
{
    public class ContactsContext : DbContext
    {
        public ContactsContext() : base("ContantsContext")
        {
        }

        public DbSet<ContactModel> Contacts { get; set; }

    }
}
