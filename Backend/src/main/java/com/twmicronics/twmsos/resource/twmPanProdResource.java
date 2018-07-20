package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmPanProd;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmPanProdService;
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
@Path("/panprod")
@Component
public class twmPanProdResource {

    @Autowired
    private ItwmPanProdService panprodService;

    @GET
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmPanProd returnOne(@PathParam("id") Long id) throws DataAccessException {
        return panprodService.findOne(id);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPanProd> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return panprodService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmPanProd createPanProd(twmPanProd panprod) throws DataAccessException {
        return panprodService.createOne(panprod);
    }

    @PUT
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmPanProd modifierPanProd(@PathParam("id") Long id, twmPanProd panprod) throws DataAccessException {
        return panprodService.updateOne(panprod);
    }

    @DELETE
    @Path("{id}")
    public void deleteOne(@PathParam("id") Long id) throws DataAccessException {
        panprodService.deleteOne(id);
    }

    @GET
    @Path("/panier/{panier}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPanProd> returnAllByPanier(@PathParam("panier") String panier, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return panprodService.findAllByPanier(panier, from, to);
    }

}
