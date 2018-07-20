package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmEtatDao;
import com.twmicronics.twmsos.entities.twmEtat;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmEtatService;
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
public class twmEtatServiceImpl implements ItwmEtatService {
    
    @Autowired
    private ItwmEtatDao etatDao;

    @Override
    public twmEtat createOne(twmEtat etat) throws DataAccessException {
        return etatDao.save(etat);
    }

    @Override
    public twmEtat findOne(int id) throws DataAccessException {
        Optional<twmEtat> et = etatDao.findById(id);
        twmEtat etat = et.isPresent() ? et.get() : null;
        return etat;
    }

    @Override
    public void deleteOne(int id) throws DataAccessException {
        twmEtat etat = etatDao.getOne(id);
        if (etat != null) {
            etatDao.delete(etat);
        } else {
            throw new WebApplicationException("État de payement Inexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmEtat updateOne(twmEtat etat) throws DataAccessException {
        return etatDao.save(etat);
    }

    @Override
    public Page<twmEtat> findAll(int from, int to) throws DataAccessException {
        return etatDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.ASC, "id")));
    }

    @Override
    public twmEtat findOneByStateName(String stateName) throws DataAccessException {
        return etatDao.findByStateNameIgnoreCase(stateName);
    }
}
