package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmPromotion;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmPromotionService;
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
@Path("/promotions")
@Component
public class twmPromotionResource {

    @Autowired
    private ItwmPromotionService promotionService;

    @GET
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmPromotion returnOne(@PathParam("id") Long id) throws DataAccessException {
        return promotionService.findOne(id);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPromotion> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return promotionService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmPromotion createPromotion(twmPromotion promotion) throws DataAccessException {
        return promotionService.createOne(promotion);
    }

    @PUT
    @Path("{id}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmPromotion modifierPromotion(@PathParam("id") Long id, twmPromotion promotion) throws DataAccessException {
        return promotionService.updateOne(promotion);
    }

    @DELETE
    @Path("{id}")
    public void deleteOne(@PathParam("id") Long id) throws DataAccessException {
        promotionService.deleteOne(id);
    }

    @GET
    @Path("/produit/{produit}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPromotion> returnOneByProduit(@PathParam("produit") Long id, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return promotionService.findAllByProduit(id, from, to);
    }

    @GET
    @Path("/state/{state}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPromotion> returnAllByState(@PathParam("state") int state, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return promotionService.findAllByState(state, from, to);
    }

    @GET
    @Path("/duree-promo/{jours}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPromotion> returnAllByDureePromo(@PathParam("jours") int dureePromo, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return promotionService.findAllByDureePromo(dureePromo, from, to);
    }

    @GET
    @Path("/date-debut/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPromotion> returnAllByDateDebut(@PathParam("date") Date dateDebut, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return promotionService.findAllByDateDebut(dateDebut, from, to);
    }

    @GET
    @Path("/date-fin/{date}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmPromotion> returnAllByDateFin(@PathParam("date") Date dateFin, @DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return promotionService.findAllByDateFin(dateFin, from, to);
    }

}
