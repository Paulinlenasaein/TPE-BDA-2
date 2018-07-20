package com.twmicronics.twmsos.resource;

import com.twmicronics.twmsos.entities.twmRole;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmRoleService;
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
@Path("/roles")
@Component
public class twmRoleResource {

    @Autowired
    private ItwmRoleService roleService;

    @GET
    @Path("{roleName}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmRole returnOne(@PathParam("roleName") String roleName) throws DataAccessException {
        return roleService.findOne(roleName);
    }

    @GET
    @Produces(value = MediaType.APPLICATION_JSON)
    public Page<twmRole> returnAll(@DefaultValue("0") @QueryParam("from") int from, @DefaultValue("50") @QueryParam("to") int to) throws DataAccessException {
        return roleService.findAll(from, to);
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    @Consumes(value = MediaType.APPLICATION_JSON)
    public twmRole createRole(twmRole role) throws DataAccessException {
        return roleService.createOne(role);
    }

    @PUT
    @Path("{roleName}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmRole modifierRole(@PathParam("roleName") String roleName, twmRole role) throws DataAccessException {
        return roleService.updateOne(role);
    }

    @DELETE
    @Path("{roleName}")
    public void deleteOne(@PathParam("roleName") String roleName) throws DataAccessException {
        roleService.deleteOne(roleName);
    }

    @GET
    @Path("/role/{role}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public twmRole returnOneByRole(@PathParam("role") String role) throws DataAccessException {
        return roleService.findOneByRoleName(role);
    }
}
