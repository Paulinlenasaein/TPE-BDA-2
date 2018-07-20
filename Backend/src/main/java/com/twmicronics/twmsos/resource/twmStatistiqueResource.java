package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmStatistique;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmStatistiqueService;
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
@Path("/statistiques")
@Component
public class twmStatistiqueResource {
    
    @Autowired
    private ItwmStatistiqueService statistiqueService;
    
    @GET
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmStatistique returnOne(@PathParam("id") Long id) throws DataAccessException {
        return statistiqueService.findOne(id);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmStatistique> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return statistiqueService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmStatistique createStatistique(twmStatistique statistique) throws DataAccessException {
        return statistiqueService.createOne(statistique);
    }

    @PUT
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmStatistique modifierStatistique(@PathParam("id") Long id, twmStatistique statistique) throws DataAccessException {
        return statistiqueService.updateOne(statistique);
    }

    @DELETE
    @Path("{id}")
    public void deleteOne(@PathParam("id") Long id) throws DataAccessException {
        statistiqueService.deleteOne(id);
    }

    @GET
    @Path("/date-jour/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmStatistique returnOneByDateJour(@PathParam("date") Date dateJour) throws DataAccessException {
        return statistiqueService.findOneByDateJour(dateJour);
    }
}
