using BPMSoft.Core.Entities;
using BPMSoft.Core.Entities.Events;

namespace BPMSoft.Configuration.UsrCreditRequestService
{


    [EntityEventListener(SchemaName = "UsrCreditRequest")]
    public class UsrCreditRequestEventListener : BaseEntityEventListener
    {
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            var entity = (Entity)sender;

            if (CheckRules(entity))
            {
                base.OnSaving(sender, e);
            }
            else
            {
                e.IsCanceled = true;
            }
        }

        public bool CheckRules(Entity entity)
        {
            var result = true;
            var authorsCount = 0;
            var userConnection = entity?.UserConnection;
            EntitySchemaQuery esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrCreditRequest");
            var usrCreditOwner = esq.AddColumn("UsrCreditOwner");
            var entities = esq.GetEntityCollection(userConnection);
            if (entities.Count > 0)
            {
                for (var i = 0; i < entities.Count; i++)
                {
                    if (entities[i].GetColumnValue("UsrCreditOwnerId").ToString() == entity.GetColumnValue("UsrCreditOwnerId").ToString())
                    {
                        authorsCount++;
                    }
                }
                if (authorsCount > 1)
                {
                    result = false;
                }
            }
            return result;
        }
    }
}
