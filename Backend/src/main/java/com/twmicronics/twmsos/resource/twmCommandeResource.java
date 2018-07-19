package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmCommande;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmCommandeService;
import java.util.Date;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Component;

/**
 *
 * @author paulinlenasaein
 */
@Path("/commandes")
@Component
public class twmCommandeResource {
    
    @Autowired
    private ItwmCommandeService commandeService;
    
    @GET
    @Path("{indexCom}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmCommande returnOne(@PathParam("indexCom") String indexCom) throws DataAccessException {
        return commandeService.findOne(indexCom);
    }
    
    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmCommande> returnAll(@DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException{
        return commandeService.findAll(from, to);
    }
    
    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmCommande createCommande(twmCommande commande) throws DataAccessException{
        return commandeService.createOne(commande);
    }
    
    @PUT
    @Path("{commande}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmCommande modifierCommande(@PathParam("commande") String indexCom, twmCommande commande) throws DataAccessException{
        return commandeService.updateOne(commande);
    }
    
    @DELETE
    @Path("{indexCom}")
    public void deleteOne(@PathParam("indexCom") String indexCom) throws DataAccessException {
        commandeService.deleteOne(indexCom);
    }
    
    @GET
    @Path("/client/{client}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmCommande> returnAllByClient(@PathParam("client") String client, @DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException {
        return commandeService.findAllByClient(client, from, to);
    }
    
    @GET
    @Path("/panier/{panier}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmCommande returnAllByPanier(@PathParam("panier") String panier) throws DataAccessException {
        return commandeService.findAllByPanier(panier);
    }
    
    @GET
    @Path("/etat/{etat}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmCommande> returnAllByEtat(@PathParam("etat") int etat, @DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException {
        return commandeService.findAllByEtat(etat, from, to);
    }
    
    @GET
    @Path("/datecommande/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmCommande> returnAllByDateCommande(@PathParam("date") Date date, @DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException{
        return commandeService.findAllByDateCommande(date, from, to);
    }
    
    @GET
    @Path("/datelivraison/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmCommande> returnAllByDateLivraison(@PathParam("date") Date date, @DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException{
        return commandeService.findAllByDateLivraison(date, from, to);
    }
}
