package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmPanier;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmPanierService;
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
@Path("/paniers")
@Component
public class twmPanierResource {

    @Autowired
    private ItwmPanierService panierService;

    @GET
    @Path("{indexPan}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmPanier returnOne(@PathParam("indexPan") String indexPan) throws DataAccessException {
        return panierService.findOne(indexPan);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPanier> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return panierService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmPanier createPanier(twmPanier panier) throws DataAccessException {
        return panierService.createOne(panier);
    }

    @PUT
    @Path("{indexPan}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmPanier modifierPanier(@PathParam("indexPan") String indexPan, twmPanier panier) throws DataAccessException {
        return panierService.updateOne(panier);
    }

    @DELETE
    @Path("{indexPan}")
    public void deleteOne(@PathParam("indexPan") String indexPan) throws DataAccessException {
        panierService.deleteOne(indexPan);
    }

    @GET
    @Path("/client/{client}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPanier> returnAllByClient(@PathParam("client") String client, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return panierService.findAllByClient(client, from, to);
    }

    @GET
    @Path("/soldetotal/{solde}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPanier> returnAllBySoldeTotal(@PathParam("solde") Double soldeTotal, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return panierService.findOneBySoldeTotal(soldeTotal, from, to);
    }

    @GET
    @Path("/datejour/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPanier> returnAllByDateJour(@PathParam("date") Date dateJour, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return panierService.findAllByDateJour(dateJour, from, to);
    }

    @GET
    @Path("/ack/{ack}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPanier> returnAllByAck(@PathParam("ack") int ack, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return panierService.findAllByAck(ack, from, to);
    }

}
