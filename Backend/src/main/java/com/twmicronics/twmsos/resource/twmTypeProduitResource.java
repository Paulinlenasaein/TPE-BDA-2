package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmTypeProduit;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmTypeProduitService;
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
@Path("/type-produit")
@Component
public class twmTypeProduitResource {
    
    @Autowired
    private ItwmTypeProduitService typeProduitService;
    
    @GET
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmTypeProduit returnOne(@PathParam("id") int id) throws DataAccessException {
        return typeProduitService.findOne(id);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmTypeProduit> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return typeProduitService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmTypeProduit createTypeProduit(twmTypeProduit typeProduit) throws DataAccessException {
        return typeProduitService.createOne(typeProduit);
    }

    @PUT
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmTypeProduit modifierTypeProduit(@PathParam("id") int id, twmTypeProduit typeProduit) throws DataAccessException {
        return typeProduitService.updateOne(typeProduit);
    }

    @DELETE
    @Path("{id}")
    public void deleteOne(@PathParam("id") int id) throws DataAccessException {
        typeProduitService.deleteOne(id);
    }

    @GET
    @Path("/type/{type}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmTypeProduit returnOneByType(@PathParam("type") String type) throws DataAccessException {
        return typeProduitService.findOneByType(type);
    }
}
