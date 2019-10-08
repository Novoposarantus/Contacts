using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using Domain.Abstract;
using Domain.Models;

namespace API.Controllers
{
    [EnableCors("*","*","*")]
    public class ContactController : ApiController
    {
        private readonly IContactRepository _repository;
        public ContactController(IContactRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IHttpActionResult> Get()
        {
            return Ok(await _repository.Get());
        }

        [HttpGet]
        public async Task<IHttpActionResult> Get([FromUri]int id)
        {
            return Ok(await _repository.Get(id));
        }

        [HttpPost]
        public async Task Post(ContactModel contact)
        {
            await _repository.SaveOrUpdate(contact);
        }

        [HttpPut]
        public async Task Put(ContactModel contact)
        {
            await _repository.SaveOrUpdate(contact);
        }

        [HttpDelete]
        public async Task Delete(int id)
        {
            await _repository.Delete(id);
        }
    }
}
