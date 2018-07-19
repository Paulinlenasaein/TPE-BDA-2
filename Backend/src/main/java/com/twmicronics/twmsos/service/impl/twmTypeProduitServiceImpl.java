package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmTypeProduitDao;
import com.twmicronics.twmsos.entities.twmTypeProduit;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmTypeProduitService;
import java.util.Optional;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author paulinlenasaein
 */
@Service
@Transactional
public class twmTypeProduitServiceImpl implements ItwmTypeProduitService {
    
    @Autowired
    private ItwmTypeProduitDao typeDao;
    
     @Override
    public twmTypeProduit createOne(twmTypeProduit type) throws DataAccessException {
        return typeDao.save(type);
    }

    @Override
    public twmTypeProduit findOne(int id) throws DataAccessException {
        Optional<twmTypeProduit> ty = typeDao.findById(id);
        twmTypeProduit type = ty.isPresent() ? ty.get() : null;
        return type;
    }

    @Override
    public void deleteOne(int id) throws DataAccessException {
        twmTypeProduit type = typeDao.getOne(id);
        if (type != null) {
            typeDao.delete(type);
        } else {
            throw new WebApplicationException("Type de produit Inexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmTypeProduit updateOne(twmTypeProduit type) throws DataAccessException {
        return typeDao.save(type);
    }

    @Override
    public Page<twmTypeProduit> findAll(int from, int to) throws DataAccessException {
        return typeDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.ASC, "type")));
    }

    @Override
    public twmTypeProduit findOneByType(String typeName) throws DataAccessException {
        return typeDao.findByType(typeName);
    }
}
