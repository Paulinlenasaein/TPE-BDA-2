package com.twmicronics.twmsos.service.impl;

import com.twmicronics.twmsos.dao.ItwmStatistiqueDao;
import com.twmicronics.twmsos.entities.twmStatistique;
import com.twmicronics.twmsos.service.DataAccessException;
import com.twmicronics.twmsos.service.ItwmStatistiqueService;
import java.util.Date;
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
public class twmStatistiqueServiceImpl implements ItwmStatistiqueService {
    
    @Autowired
    private ItwmStatistiqueDao statistiqueDao;
    
    @Override
    public twmStatistique createOne(twmStatistique statistique) throws DataAccessException {
        return statistiqueDao.save(statistique);
    }

    @Override
    public twmStatistique findOne(Long id) throws DataAccessException {
        Optional<twmStatistique> stat = statistiqueDao.findById(id);
        twmStatistique statistique = stat.isPresent() ? stat.get() : null;
        return statistique;
    }

    @Override
    public void deleteOne(Long id) throws DataAccessException {
        twmStatistique stat = statistiqueDao.getOne(id);
        if (stat != null) {
            statistiqueDao.delete(stat);
        } else {
            throw new WebApplicationException("Message innexistant", Response.Status.NO_CONTENT);
        }
    }

    @Override
    public twmStatistique updateOne(twmStatistique statistique) throws DataAccessException {
        return statistiqueDao.save(statistique);
    }

    @Override
    public Page<twmStatistique> findAll(int from, int to) throws DataAccessException {
        return statistiqueDao.findAll(PageRequest.of(from, to, Sort.by(Sort.Direction.DESC, "dateJour")));
    }

    @Override
    public twmStatistique findOneByDateJour(Date dateJour) throws DataAccessException {
        return statistiqueDao.findByDateJour(dateJour);
    }
}
