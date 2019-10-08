using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Abstract;
using Domain.Context;
using Domain.Models;

namespace Domain.Repository
{
    public class ContactRepository : BaseRepository, IContactRepository
    {
        public async Task<List<ContactModel>> Get()
        {
            return await DbContext.Contacts.ToListAsync();
        }

        public async Task<ContactModel> Get(int id)
        {
            return await DbContext.Contacts
                .FirstOrDefaultAsync(contact => contact.Id == id);
        }

        public async Task SaveOrUpdate(ContactModel contact)
        {
            DbContext.Contacts.AddOrUpdate(contact);
            await DbContext.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var contact = await DbContext.Contacts.FirstOrDefaultAsync(item => item.Id == id);
            if (contact == null)
            {
                return;
            }

            DbContext.Contacts.Remove(contact);
            await DbContext.SaveChangesAsync();
        }
    }
}
