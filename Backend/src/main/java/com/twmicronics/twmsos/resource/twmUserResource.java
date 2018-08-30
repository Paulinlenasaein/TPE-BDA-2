package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmUser;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmUserService;
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
@Path("/users")
@Component
public class twmUserResource {
    
    @Autowired
    private ItwmUserService userService;
    
    @GET
    @Path("{username}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmUser returnOne(@PathParam("username") String username) throws DataAccessException {
        return userService.findOne(username);
    }
    
    @GET
    @Path("/sendmail/{email}/{lastname}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public String sendAuthMailToUser(@PathParam("email") String email, @PathParam("lastname") String lastname) throws DataAccessException {
        return userService.sendEmail(email, lastname);
    }
    
    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmUser> returnAll(@DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException{
        return userService.findAll(from, to);
    }
    
    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmUser createtwmUser(twmUser user) throws DataAccessException{
        return userService.createOne(user);
    }
    
    @PUT
    @Path("{username}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmUser modifiertwmUser(@PathParam("username")String username, twmUser user) throws DataAccessException{
        return userService.updateOne(user);
    }
    
    @DELETE
    @Path("{username}")
    public void deleteOne(@PathParam("username") String username) throws DataAccessException {
        userService.deleteOne(username);
    }
    
    @GET
    @Path("/firstname/{firstname}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmUser> returnAllByFirstName(@PathParam("firstname") String firstname, @DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException {
        return userService.findAllByFirstName(firstname, from, to);
    }
    
    @GET
    @Path("/firstandlastname/{first}/{last}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmUser> returnAllByFirstNameAndLastName(@PathParam("first") String first, @PathParam("last") String last, @DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException {
        return userService.findAllByFirstNameAndLastName(first, last, from, to);
    }
    
    @GET
    @Path("/email/{email}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmUser returnOneByEmail(@PathParam("email") String email) throws DataAccessException {
        return userService.findOneByEmail(email);
    }
    
    @GET
    @Path("/telephone/{telephone}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmUser returnOneByTelephone(@PathParam("telephone") String telephone) throws DataAccessException {
        return userService.findOneByTelephone(telephone);
    }
    
    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    @Path("/state/{state}")
    public Page<twmUser> returnAllByState(@PathParam("state") int state, @DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException{
        return userService.findAllByState(state, from, to);
    }
    
    @GET
    @Path("/role/{rolename}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmUser> returnAllByRole(@PathParam("rolename") String rolename, @DefaultValue("0") @QueryParam("from")int from, @DefaultValue("50") @QueryParam("to")int to) throws DataAccessException{
        return userService.findAllByRole(rolename, from, to);
    }
    
}
