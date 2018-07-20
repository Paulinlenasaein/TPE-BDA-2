package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmEtat;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmEtatService;
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
@Path("/etats")
@Component
public class twmEtatResource {

    @Autowired
    private ItwmEtatService etatService;

    @GET
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmEtat returnOne(@PathParam("id") int id) throws DataAccessException {
        return etatService.findOne(id);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmEtat> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return etatService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmEtat createEtat(twmEtat etat) throws DataAccessException {
        return etatService.createOne(etat);
    }

    @PUT
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmEtat modifierEtat(@PathParam("id") int id, twmEtat etat) throws DataAccessException {
        return etatService.updateOne(etat);
    }

    @DELETE
    @Path("{id}")
    public void deleteOne(@PathParam("id") int id) throws DataAccessException {
        etatService.deleteOne(id);
    }

    @GET
    @Path("/statename/{state}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmEtat returnOneyStateName(@PathParam("state") String state) throws DataAccessException {
        return etatService.findOneByStateName(state);
    }

}
