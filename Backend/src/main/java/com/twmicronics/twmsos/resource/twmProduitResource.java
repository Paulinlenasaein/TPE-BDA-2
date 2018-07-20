package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmProduit;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmProduitService;
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
@Path("/produits")
@Component
public class twmProduitResource {

    @Autowired
    private ItwmProduitService produitService;

    @GET
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmProduit returnOne(@PathParam("id") Long id) throws DataAccessException {
        return produitService.findOne(id);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmProduit> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return produitService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmProduit createProduit(twmProduit produit) throws DataAccessException {
        return produitService.createOne(produit);
    }

    @PUT
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmProduit modifierProduit(@PathParam("id") Long id, twmProduit produit) throws DataAccessException {
        return produitService.updateOne(produit);
    }

    @DELETE
    @Path("{id}")
    public void deleteOne(@PathParam("id") Long id) throws DataAccessException {
        produitService.deleteOne(id);
    }

    @GET
    @Path("/nomprod/{nomprod}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmProduit returnOneByNomProd(@PathParam("nomprod") String nomProd) throws DataAccessException {
        return produitService.findOneByNomProd(nomProd);
    }

    @GET
    @Path("/typeprod/{type}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmProduit> returnAllByType(@PathParam("type") int type, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return produitService.findAllByType(type, from, to);
    }

    @GET
    @Path("/prix-unit/{prix}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmProduit> returnAllByPrixUnit(@PathParam("prix") Double prixUnit, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return produitService.findAllByPrixUnit(prixUnit, from, to);
    }

    @GET
    @Path("/state/{state}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmProduit> returnAllByState(@PathParam("state") int state, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return produitService.findAllByState(state, from, to);
    }

}
