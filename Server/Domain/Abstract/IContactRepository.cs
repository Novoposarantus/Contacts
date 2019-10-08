using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Models;

namespace Domain.Abstract
{
    public interface IContactRepository
    {
        Task<List<ContactModel>> Get();
        Task<ContactModel> Get(int id);
        Task SaveOrUpdate(ContactModel contact);
        Task Delete(int id);
    }
}
