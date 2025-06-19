import { motion } from 'framer-motion';
import { centerVariants } from '../../constants/motion';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <motion.div
            variants={centerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="flex flex-col md:gap-y-1 text-center"
        >
            <p className="text-lg font-medium text-primary">{title}</p>
            <h3 className="sm:text-h3 text-xxl text-primary">{subtitle}</h3>
        </motion.div>);
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default SectionTitle;