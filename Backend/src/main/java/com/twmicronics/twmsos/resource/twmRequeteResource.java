package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmRequete;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmRequeteService;
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
@Path("/requetes")
@Component
public class twmRequeteResource {

    @Autowired
    private ItwmRequeteService requeteService;

    @GET
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmRequete returnOne(@PathParam("id") Long id) throws DataAccessException {
        return requeteService.findOne(id);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmRequete> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return requeteService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmRequete createRequete(twmRequete requete) throws DataAccessException {
        return requeteService.createOne(requete);
    }

    @PUT
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmRequete modifierRequete(@PathParam("id") Long id, twmRequete requete) throws DataAccessException {
        return requeteService.updateOne(requete);
    }

    @DELETE
    @Path("{id}")
    public void deleteOne(@PathParam("id") Long id) throws DataAccessException {
        requeteService.deleteOne(id);
    }

    @GET
    @Path("/client/{client}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmRequete> returnOneByClient(@PathParam("client") String client, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return requeteService.findOneByClient(client, from, to);
    }

    @GET
    @Path("/admin/{admin}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmRequete> returnOneByAdmin(@PathParam("admin") String admin, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return requeteService.findOneByAdmin(admin, from, to);
    }

    @GET
    @Path("/date-envoi/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmRequete> returnAllByDateEnvoi(@PathParam("date") Date dateEnvoi, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return requeteService.findAllByDateEnvoi(dateEnvoi, from, to);
    }

    @GET
    @Path("/client-status/{client}/{status}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmRequete> returnAllByClientAndStatus(@PathParam("client") String client, @PathParam("status") int status, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return requeteService.findAllByClientAndStatus(client, status, from, to);
    }

    @GET
    @Path("/admin-status/{admin}/{status}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmRequete> returnAllByAdminAndStatus(@PathParam("admin") String admin, @PathParam("status") int status, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return requeteService.findAllByAdminAndStatus(admin, status, from, to);
    }

    @GET
    @Path("/status/{status}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmRequete> returnAllByStatus(@PathParam("status") int status, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return requeteService.findAllByStatus(status, from, to);
    }
}
