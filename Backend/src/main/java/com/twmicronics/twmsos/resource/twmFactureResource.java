package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmFacture;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmFactureService;
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
@Path("/factures")
@Component
public class twmFactureResource {

    @Autowired
    private ItwmFactureService factureService;

    @GET
    @Path("{numFacture}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmFacture returnOne(@PathParam("numFacture") String numFacture) throws DataAccessException {
        return factureService.findOne(numFacture);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmFacture> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return factureService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmFacture createFacture(twmFacture facture) throws DataAccessException {
        return factureService.createOne(facture);
    }

    @PUT
    @Path("{numFacture}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmFacture modifierFacture(@PathParam("numFacture") String numFacture, twmFacture facture) throws DataAccessException {
        return factureService.updateOne(facture);
    }

    @DELETE
    @Path("{numFacture}")
    public void deleteOne(@PathParam("numFacture") String numFacture) throws DataAccessException {
        factureService.deleteOne(numFacture);
    }

    @GET
    @Path("/client/{client}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmFacture> returnAllByClient(@PathParam("client") String client, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return factureService.findAllByClient(client, from, to);
    }

    @GET
    @Path("/panier/{panier}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmFacture returnOneByPanier(@PathParam("panier") String panier) throws DataAccessException {
        return factureService.findOneByPanier(panier);
    }

    @GET
    @Path("/dateachat/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmFacture> returnAllByDateAchat(@PathParam("date") Date date, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return factureService.findAllByDateAchat(date, from, to);
    }

    @GET
    @Path("/datefact/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmFacture> returnAllByDateFacturation(@PathParam("date") Date date, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return factureService.findAllByDateFacturation(date, from, to);
    }
}
